package com.example.keeper.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.keeper.model.Task;
import com.example.keeper.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository _TaskRepository){
        this.taskRepository = _TaskRepository;
    }

    public List<Task> getAllTasks(){

        return taskRepository.findAll();
    }

    public Task createTask(Task task){
        System.out.println("new task "+ task.getTitle() + task.getNote() );
        return taskRepository.save(task);
    }

    public void deleteTask(Integer id){
        System.out.println("deleteing  task of id"+ id);
        taskRepository.deleteById(id);
    }

    
}
