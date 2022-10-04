const axios = require("axios");
const urlBase = "http://192.168.1.66:4002/";

export const viewCustomers = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/customers`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendCustomers = async (customers) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/customers`, customers);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewItems = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/items`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendItems = async (items) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/items`, items);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewEmployees = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/employees`);
    //console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendEmployees = async (employees) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/employees`, employees);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewClients = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/clients`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendClients = async (clients) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/clients`, clients);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewRoles = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/roles`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendRoles = async (roles) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/roles`, roles);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewSkills = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/skills`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendSkills = async (skills) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/skills`, skills);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewStatuses = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/statuses`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendStatuses = async (statuses) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/statuses`, statuses);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewDepartments = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/departments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendDepartments = async (departments) => {
  try {
    const response = await axios.post(
      `${urlBase}v1.0/departments`,
      departments
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewWorks = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/works`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const sendWorks = async (ots) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/ots`, ots);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const viewTasks = async () => {
  try {
    const response = await axios.get(`${urlBase}v1.0/tasks`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const viewTasksPerWork = async (workId) => {
  try {
    const response = await axios.get(`${urlBase}v1.0/tasks/work/${workId}`);
    console.log("viewTasksPerWork >>>",response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



export const sendTasks = async (tasks) => {
  try {
    const response = await axios.post(`${urlBase}v1.0/tasks`, tasks);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
