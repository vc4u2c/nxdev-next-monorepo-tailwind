Param(
  [String]$GitHubOrganisationName,
  [String]$GitHubRepositoryName,
  [String]$ProjectName
)

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$checksScript = Join-Path $scriptRoot "checks.ps1"
$environmentsFile = Join-Path $scriptRoot "environments.json"

try {
  . $checksScript
}
catch {
  Write-Host $_.Exception.Message -ForegroundColor Red
  Write-Host "Setup script terminated due to the checks failure." -ForegroundColor Red
  exit 1
}

$MissingParameterValues = $false

if (-not $GitHubOrganisationName) {
  $ownerJson = gh repo view --json owner 2>$null | ConvertFrom-Json
  if ($ownerJson -and $ownerJson.owner -and $ownerJson.owner.login) {
    $GitHubOrganisationName = $ownerJson.owner.login
  }
  else {
    $MissingParameterValues = $true
  }
}

if (-not $GitHubRepositoryName) {
  $GitHubRepositoryName = $(gh repo view --json name -q '.name' 2> $null)
  if (-not $GitHubRepositoryName) { $MissingParameterValues = $true }
}

if (-not $ProjectName) {
  $MissingParameterValues = $true
}

$ProjectNameUpper = $ProjectName.ToUpper()

$repoUrl = "https://github.com/$GitHubOrganisationName/$GitHubRepositoryName"

$environments = Get-Content -Raw -Path $environmentsFile | ConvertFrom-Json

$ScriptParameters = @{
  "GitHubOrganisationName" = $GitHubOrganisationName
  "GitHubRepositoryName"   = $GitHubRepositoryName
  "ProjectName"            = $ProjectName
  "RepoUrl"                = $repoUrl
}

Write-Host
Write-Host "This script performs cleanup operations to delete resource groups, Azure AD applications, purge deleted key vaults, and delete GitHub environments associated with a specific project hosted on GitHub. It searches for resources based on the project name and performs the necessary deletion and purging actions. The script leverages the Azure CLI to interact with Azure resources. It aims to facilitate the cleanup process and remove unnecessary resources from your Azure environment."
Write-Host
Write-Host "Parameters:" -ForegroundColor Green
$ScriptParameters | Format-Table -AutoSize
Write-Host

if ($MissingParameterValues) {
  Write-Host "Script execution cancelled. Missing parameter values." -ForegroundColor Red
  return
}

Write-Host "Warning: This script will perform cleanup operations to delete GitHub environments, including deleting resource groups, Azure AD applications, and purging deleted key vaults, deleting GitHub environments associated with the project name '$ProjectName'. Make sure you understand the consequences and have verified the project name before proceeding." -ForegroundColor Red
Write-Host
Write-Host "Disclaimer: Use this script at your own risk. The author and contributors are not responsible for any loss of data or unintended consequences resulting from running this script." -ForegroundColor Yellow
Write-Host

$confirmation = Read-Host "Do you want to continue? (y/N)"

if ($confirmation -ne "y") {
  Write-Host "Script execution cancelled." -ForegroundColor Red
  return
}

Write-Host "Searching for Resource Groups..."
$resourceGroups = az group list --query "[?contains(name, '$ProjectName')].name" --output tsv

foreach ($rg in $resourceGroups) {
  Write-Host "Deleting: $rg"
  az group delete --name $rg --yes > $null 2>&1
}

Write-Host "Searching for Azure AD Applications..."
$appRegistrations = az ad app list  --query "[?contains(displayName, 'github$ProjectName')].{Name:displayName, AppId:appId}" --output json | ConvertFrom-Json

foreach ($appRegistration in $appRegistrations) {
  $appName = $appRegistration.Name
  $appId = $appRegistration.AppId

  Write-Host "Deleting: $appName"
  az ad app delete --id $appId > $null 2>&1
}

Write-Host "Searching for Deleted Key Vaults..."
$deletedKeyVaults = az keyvault list-deleted --query "[?contains(name, 'kv-$ProjectName')].name" --output tsv

foreach ($vaultName in $deletedKeyVaults) {
  Write-Host "Purging: $vaultName"
  az keyvault purge --name $vaultName > $null 2>&1
}

Write-Host "Deleting GitHub environments and variables..."
function DeleteVariables() {
  gh variable delete AZURE_TENANT_ID --repo $repoUrl
  gh variable delete AZURE_SUBSCRIPTION_ID --repo $repoUrl
  gh variable delete PROJECT_NAME_$ProjectNameUpper --repo $repoUrl
}

DeleteVariables

function DeleteEnvironmentVariablesAndSecrets {
  param(
    $environmentName
  )

  gh variable delete AZURE_CLIENT_ID_$ProjectNameUpper --env $environmentName --repo $repoUrl
  gh variable delete AZURE_RESOURCE_GROUP_NAME_$ProjectNameUpper --env $environmentName --repo $repoUrl
}

foreach ($environment in $environments.PSObject.Properties) {
  $environmentName = $environment.Value
  DeleteEnvironmentVariablesAndSecrets $environmentName
}

Write-Host "Done"
