terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.93.0"
    }
  }
  # Remote backend
  backend "azurerm" {
  }
}

provider "azurerm" {
  use_oidc = true
  features {}
  client_secret = var.client_secret
  subscription_id = var.subscription_id
  client_id = var.client_id
  tenant_id = var.tenant_id
}