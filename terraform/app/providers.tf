terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.93.0"
    }
  }
  # Remote backend
  backend "azurerm" {
    resource_group_name  = "zupi-terraform-state"
  }
}

provider "azurerm" {
  features {}
}