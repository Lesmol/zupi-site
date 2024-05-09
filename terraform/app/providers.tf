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
}