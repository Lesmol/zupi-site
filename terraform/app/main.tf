resource "azurerm_resource_group" main {
  name     = var.rg-name
  location = var.location
  tags     = { "dev" : "zupi" }
}

resource "azurerm_static_plan" main {
  name                = "zupi-appserviceplan"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku_name            = "F1"
  os_type             = "Windows"
  tags                = azurerm_resource_group.main.tag
}

output "static_web_app_id" {
  description = "The ID of the Static Web App."
  value       = azurerm_static_site.main
}

output "static_web_app_default_hostname" {
  description = "The default hostname associated with the Static Web App."
  value       = azurerm_static_site.example.default_hostname
}
