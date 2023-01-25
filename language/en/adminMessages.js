const adminMessages = {
  error: "Something went wrong.",
  authFail: "Authentication Fail",
  success: "Successfully Loaded",
  schema: {
    user: {
      firstName: "First Name is required",
      lastName: "Last Name is required",
      mobile: "Mobile Number is required",
      email: "Email Id is required",
      city: "City is required",
      password: "Password is required",
    },
    subscription: {
      title: "Title is required",
      days: "Days are required",
      price: "Price is required",
      subsId: "Subscription ID is required",
    },
    userSubscription: {
      startAt: "Start Date is required",
      endAt: "End Date is required",
      subsId: "Subscription Id is required",
      userId: "User ID is required",
    },
    role: {
      roleId: "Role ID is required",
      title: "Role Title is required",
    },
    products: {
      name: "Product Name is required",
      productId: "Product ID is required",
      price: "Price is required",
      description: "Description is required",
    },
    notification: {
      title: "Title is required",
      type: "Type is required",
      description: "Description is required",
    },
    events: {
      title: "Event title is required",
      date: "Date is required",
      venue: "Venue is required",
      description: "Description is required",
    },
    branches: {
      name: "Name is required",
      city: "City is required",
      location: "Location is required",
      branchId: "Branch ID is required",
    },
  },
  controller: {
    user: {
      store: "User Added",
      update: "User Updated",
      delete: "User Deleted Successfully",
    },
    branch: {
      store: "Branch Added",
      update: "Branch Updated",
      delete: "Branch Deleted Successfully",
    },
    event: {
      store: "Event Added",
      update: "Event Updated",
      delete: "Event Deleted Successfully",
    },
  },
};

export default adminMessages;
