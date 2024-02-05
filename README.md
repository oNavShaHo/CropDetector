(under development) - https://astonishing-profiterole-9c2520.netlify.app/
a crop disease detection website


-System Design and Architecture

High Level Diagram

system design


![system design](https://github.com/oNavShaHo/CropDetector/assets/106837111/e0365e8f-4557-4215-beb3-0baf3152f005)



Architecture Used (Tier 2)

![tier 2](https://github.com/oNavShaHo/CropDetector/assets/106837111/aca9c6b1-bea1-4958-9f5a-1aea4117ffc4)




System Architecture:

Frontend (React): User Interface: Develop a user-friendly UI for image uploading and displaying results. User Authentication: Implement user authentication for secure access.

Backend (Node.js):

⦁Image Handling: Receive and store uploaded images temporarily. Initiate communication with ML models.

⦁ML Model Communication: Use an asynchronous mechanism to communicate with ML models (consider using libraries like Axios). Implement a fault-tolerant algorithm to route requests to available ML models. Manage timeouts and retries for fault tolerance.

⦁Response Processing: Handle responses from ML models. Convert ML responses into a meaningful JSON format.

⦁API Endpoints: Design API endpoints for frontend communication.
