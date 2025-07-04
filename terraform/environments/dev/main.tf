# Terraform configuration block
# This block is used to configure the version of Terraform and the required providers for the project.
# The project utilises the AWS provider, thus the provider is "hashicorp/aws".
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    region       = "ap-southeast-1"
    bucket       = "##ENTER_YOUR_BUCKET_NAME"
    key          = "#BUCKET_DIRECTORY"
    use_lockfile = true
    encrypt      = true
  }
}

