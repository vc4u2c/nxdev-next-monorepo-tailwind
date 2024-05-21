@description('Select the type of environment you want to provision.')
@allowed([
  'Development'
  'QA'
  'Production'
])
param environmentName string

@description('The Application Names.')
@allowed([
  'store'
  'inventory'
])
param projectName string

// Define the environment configuration map.
var environmentConfigurationMap = {
  Production: {
    environmentAbbreviation: 'prd'
    swa: {
      sku: 'Basic'
    }
  }
  QA: {
    environmentAbbreviation: 'qa'
    swa: {
      sku: 'Basic'
    }
  }
  Development: {
    environmentAbbreviation: 'dev'
    swa: {
      sku: 'Basic'
    }
  }
}

module swa 'swa.bicep' = {
  name: 'swa-${deployment().name}'
  params: {
    sku: environmentConfigurationMap[environmentName].swa.sku
    name: 'swa-${projectName}-${environmentConfigurationMap[environmentName].environmentAbbreviation}'
  }
}
