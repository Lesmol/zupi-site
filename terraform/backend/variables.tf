variable "location" {
  type        = string
  description = "The Azure Region in which all resources groups should be created."
}

variable "rg-name" {
  type        = string
  description = "The name of the realtime chat resource group"
}

variable "storage-account-name" {
  type        = string
  description = "The name of the storage account"
}

variable "container-name" {
  type        = string
  description = "The name of the storage account container"
}