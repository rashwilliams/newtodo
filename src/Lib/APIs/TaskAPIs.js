
        const tasks = [

    {
        id: Math.floor (Math.random ()* 1000000) + "abc1234",
        title: "Go to School",
        description: "Submit application for Junior Developer",
        createdAT: new Date (),
        executionDate: new Date (),
        isDone: "completed"
      },
      
      {
        id: Math.floor (Math.random ()* 1000000) + "abc1234",
        title: "Go to School",
        description: "Interview for Junior Developer Position",
        createdAT: new Date (),
        executionDate: new Date (),
        isDone: "completed"
      }
    
      ];

      export const getAllTasks  = () => {
        return tasks;
      };

      export const createNewTask = (taskData) => {
        if (!taskData.title || !taskData.Description) {
            return {error: "all task input data are required"}
        }

        tasks.push (taskData);
        return {message: "new task created successfully"};
      };

      export const deleteTask = (taskId) => {
        const deleteTaskIndex = tasks.findIndex((task)=> task.id === taskId)

        if (deleteTaskIndex >= 0 ) {

            tasks.splice (deleteTaskIndex, 1);
            return { message: "task deleted successfully"};
        } else {
            return {error: "tasks does not exist"};
        }
      }


