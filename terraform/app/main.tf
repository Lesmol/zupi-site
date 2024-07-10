# Create a resource group
resource "azurerm_resource_group" "zupi_rg" {
  name     = var.rg-name
  location = var.location
  tags = {
    "zupi" = "dev"
  }
}

# Create a service plan
resource "azurerm_service_plan" "zupi_service_plan" {
  name                = "zupi-service-plan"
  resource_group_name = azurerm_resource_group.zupi_rg.name
  location            = azurerm_resource_group.zupi_rg.location
  os_type             = "Linux"
  sku_name            = "F1"
  tags                = azurerm_resource_group.zupi_rg.tags
}

# Create linux web app
resource "azurerm_linux_web_app" "zupi_web_app" {
  name                = "zupi-linux-web-app"
  resource_group_name = azurerm_resource_group.zupi_rg.name
  location            = azurerm_resource_group.zupi_rg.location
  service_plan_id     = azurerm_service_plan.zupi_service_plan.id
  tags                = azurerm_resource_group.zupi_rg.tags

  site_config {}
}