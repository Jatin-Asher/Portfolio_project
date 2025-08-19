---
title: "This is the second dummy project"
discription: "This project is added in the page for testing or review purpose"
dateString: Aug 2025
draft: false
weight: 110
cover:
  image: "projects/new_image.jpg"
  alt: "Demo project cover"
  caption: "Cover demo"
---

## Description

This project is a Property Dealing Website designed to connect property buyers, sellers, and agents on a single platform. It allows users to search, list, and manage properties with ease while providing secure and transparent interactions.

## Features

1. Secure Authentication System

JWT (JSON Web Tokens) / Session-based login for secure user sessions.

Hashed & Salted Passwords using bcrypt/argon2 instead of storing plain text.

Two-Factor Authentication (2FA) for extra security (OTP via email/SMS).

2. Role-Based Access Control (RBAC)

Separate access levels for Clients, Dealers, and Admins.

Dealers can add/edit listings, Clients can only view/contact, Admin can manage all.

3. Input Validation & Sanitization

Prevent SQL Injection & XSS attacks by sanitizing user inputs.

Use schema validators (e.g., Zod / Joi) to validate login forms & property details.

4. Secure Session Handling

Auto session expiry after inactivity.

CSRF protection for login & sensitive actions.

5. Encrypted Data Storage

Store sensitive client/dealer details in encrypted format.

Mask phone numbers & emails until necessary.

6. Activity Logs & Monitoring

Track logins, failed attempts, and suspicious activities.

Alert system for multiple failed logins (possible brute force).

7. Forgot Password & Recovery System

Secure reset links with expiry times.

Verification through registered email/phone.

8. Dealer & Client Data Safety

Dealers: Protect property ownership data, prevent fake listings.

Clients: Secure personal info (contact, budget, etc.) from unauthorized access.

End-to-end encryption for communication (buyer ↔ dealer).

9. API Security

Rate limiting to prevent brute force/DDoS attacks.

Only authenticated users can access property posting APIs.

10. Compliance & Privacy

GDPR-like consent for storing user data.

Option for users to delete accounts/data.

