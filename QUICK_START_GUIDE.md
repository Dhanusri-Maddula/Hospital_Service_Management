# 🚀 Quick Start Guide - Get Your Project Running

## ✅ What I Just Fixed

The error was caused by missing route files. I've now created:
- ✅ `server/routes/ambulance.js`
- ✅ `server/routes/alerts.js`
- ✅ `server/routes/equipment.js`
- ✅ `server/routes/attendance.js`

---

## 📝 Step-by-Step Instructions

### **Step 1: Fix the Windows Folder Command**

Instead of `mkdir -p`, use this on Windows:

```bash
# Navigate to server folder (you're already there)
cd C:\Users\mdhan\OneDrive\Desktop\hospitalService\server

# Create uploads folder (Windows syntax)
mkdir uploads

# Create emergency subfolder
mkdir uploads\emergency
```

Or do it in one command:
```bash
mkdir uploads\emergency
```

---

### **Step 2: Create Environment File**

Create a file named `.env` in the server folder:

```bash
# In the server folder, create .env file
cd server

# Create the file (or use a text editor)
echo. > .env
```

Then edit `.env` and add:
```env
MONGODB_URI=mongodb://localhost:27017/hospitalDB
JWT_SECRET=your_super_secret_key_change_this
PORT=5000
NODE_ENV=development
```

---

### **Step 3: Start the Server**

Now run:

```bash
npm start
```

You should see:
```
✅ MongoDB Connected (or warning if no DB)
🚀 Server running on port 5000
📡 Socket.IO ready for connections
```

---

## 🎯 Alternative: Run Without MongoDB (For Testing)

If you don't have MongoDB installed:

**Option 1: Install MongoDB**
1. Download from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Install it
3. Run the setup above

**Option 2: Use MongoDB Atlas (Cloud - FREE)**
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free
3. Create a free cluster
4. Get connection string
5. Update `.env` with: `MONGODB_URI=your_connection_string_here`

**Option 3: Run Without DB (Limited Features)**
- Server will still start
- Auth won't work without DB
- Frontend will work fine for testing

---

## ✅ What You've Done Correctly

1. ✅ `cd server` - Correct
2. ✅ `npm install` - Correct (186 packages installed!)
3. ✅ `mkdir uploads` - Works on Windows
4. ✅ Trying to run server - Correct approach

---

## 🔧 Quick Commands Reference

```bash
# Navigate to server
cd server

# Create uploads folder (Windows)
mkdir uploads
mkdir uploads\emergency

# Or create .env file manually
# Use Notepad or VS Code to create .env

# Start server
npm start
```

---

## 🚀 Next Steps

### **1. Server Terminal (Keep Running)**
```bash
cd server
npm start
```

### **2. Frontend Terminal (New Terminal)**
```bash
# In project root
npm run dev
```

### **3. Access Your App**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

---

## 🎉 That's It!

You should now have:
- ✅ Backend server running
- ✅ Frontend development server running
- ✅ All features accessible
- ✅ Real-time WebSocket ready

---

## 💡 Tip

If you get MongoDB connection errors, the server will still start but show a warning. You can:
1. Install MongoDB locally
2. Use MongoDB Atlas (free)
3. Continue without DB for frontend testing

**The project will work fine for testing even without MongoDB!**


