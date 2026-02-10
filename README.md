
Eventify — Cloud-Native Event Booking Platform

Eventify is a production-grade, cloud-native, microservices-based event booking platform built on AWS.
The system is designed with scalability, security, fault tolerance, and DevOps best practices as first-class concerns.

🧠 High-Level Architecture

Frontend

React (SPA)

Communicates only via ALB HTTPS endpoint

Backend (Microservices on ECS Fargate)

Auth Service

User registration & login

JWT authentication

Role management (USER / ORGANIZER)

Event Service

Event listing & creation

Seat reservation with atomic updates

Emits domain events asynchronously

Asynchronous Processing

AWS SQS (SeatReserved events)

AWS Lambda (notification consumer)

AWS SES (email delivery)

Idempotent processing using DynamoDB

🔐 Security & Hardening 

HTTPS enforced using AWS ACM + ALB

HTTP → HTTPS redirection

Secrets stored in AWS Secrets Manager

No secrets baked into images or GitHub

IAM roles with least privilege

GitHub Actions uses OIDC (no long-lived AWS keys)

⚙️ Infrastructure & Deployment

AWS ECS Fargate

Fully serverless containers

No EC2 management

Application Load Balancer

Path-based routing

Health checks per service

Auto Scaling

ECS Service scaling based on CPU utilization

CI/CD

GitHub Actions

Build → Tag → Push to ECR

Rolling deployments with zero downtime

🔁 Request & Data Flow
Authentication

User logs in

Auth Service issues JWT

Frontend sends JWT on each request

Services validate JWT locally

Event Booking

User reserves seat

Event Service decrements seat count atomically (DynamoDB conditional update)

SeatReserved event sent to SQS

Lambda consumes event

Confirmation email sent via SES

🛠️ Tech Stack

Frontend: React

Backend: Node.js (Express)

Cloud: AWS

ECS Fargate

ALB

DynamoDB

SQS

Lambda

SES

ACM

Secrets Manager

CI/CD: GitHub Actions + AWS OIDC

Containerization: Docker

IaC Style: Declarative task definitions + managed services

📌 Key Design Decisions

Fargate over EC2 → No infrastructure maintenance

Async notifications → Booking never blocked by email failures

OIDC for CI/CD → Zero static AWS credentials

JWT stateless auth → Horizontally scalable services

Atomic seat reservation → Race-condition safe

🚀 Status

✅ Fully deployed
✅ Production-ready
✅ Scalable & secure