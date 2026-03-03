# Office Management Retail POS System

### **Overview**
This is a centralized dashboard application built with the **MERN Stack** (React, Node.js, Express, MongoDB) to manage office supply procurement. It streamlines the process of requesting daily necessities within an office environment, providing a structured workflow between employees and administrators.

---

### **Key Modules & Features**

#### **1. Employee Request Dashboard**
- **Simplified Ordering:** Employees can easily browse and request products needed for their daily office tasks directly from the dashboard.
- **Request Tracking:** Real-time visibility into the status of their product requests.

#### **2. Admin Approval Workflow**
- **Centralized Control:** Admins have the sole authority to review all incoming product requests.
- **Decision Management:** Admins can Approve, Decline, or Delete requests. A request is only processed if it receives official admin approval.
- **Expense Control:** Helps the organization minimize unwanted or unnecessary expenses through strict oversight.

#### **3. Authorization & Security**
- **Role-Based Access:** Users must be authorized to enter the dashboard, ensuring that sensitive office data remains secure.
- **Important Note:** The previous admin credentials (admin@gmail.com / 123456) are currently **NOT WORKING** due to backend/database maintenance.

#### **4. Planned Enhancements**
- **QR Code Integration:** Future support for quick product tracking using QR codes.
- **Advanced Analytics:** Visual reports to track monthly office expenditures.

---

### **Technical Stack**
* **Frontend:** React.js, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **API:** RESTful API integration
* **Styling:** CSS3 / Bootstrap

---

### **How to Run This Project**
1. Clone the repository.
2. Run `npm install` in both the root and client folders.
3. Start the backend server using `node index.js` or `nodemon`.
4. Start the React app using `npm start`.

#### **Authentication Note**
* **Status:** Default admin credentials (admin@gmail.com) are currently **deactivated** due to backend migration and maintenance.
* **Access:** For a complete overview of the administrative workflow and role-based logic, please refer to the source code and project documentation below.


* ### live link: (https://creative-axolotl-782f50.netlify.app/login)
* ### code link: (https://github.com/sohanwebdevctg/react4-office-management-retail-pos-system)