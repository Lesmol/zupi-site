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
  description = "The name of the realtime chat resource group"
}

# variable "subscription_id" {
#   type        = string
#   description = "The subscription id of the realtime chat service principal"
# }

# variable "tenant_id" {
#   type        = string
#   description = "The tenant id of the realtime chat service principal"
# }

# variable "client_id" {
#   type        = string
#   description = "The client id of the realtime chat service principal"
# }