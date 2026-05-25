provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "devops_demo" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.medium"

  tags = {
    Name = "ai-gitops-demo"
  }
}