param name string
@allowed(['Free', 'Standard'])
param sku string = 'Standard'
// test

resource swa 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: resourceGroup().location
  tags: null
  sku: {
    name: sku
    size: sku
  }
}
