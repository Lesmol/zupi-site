terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.93.0"
    }
  }
  # Remote backend
  backend "azurerm" {
  use_oidc = true
  }
}

provider "azurerm" {
  features {}
}