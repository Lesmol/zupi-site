# Create Resource Group
resource "azurerm_resource_group" "main" {
  name     = var.rg-name
  location = var.location
  tags     = { "dev" : "zupi" }
}

# Create Storage Account
resource "azurerm_storage_account" "main" {
  name                     = var.storage-account-name
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  access_tier              = "Hot"
  account_tier             = "Standard"
  account_replication_type = "LRS"

  tags = azurerm_resource_group.main.tags
}

# Create Container
resource "azurerm_storage_container" "main" {
  name                  = var.container-name
  storage_account_name  = azurerm_storage_account.main.name
  container_access_type = "private"
}