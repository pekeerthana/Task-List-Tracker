package com.example.keeper.repository;

import com.example.keeper.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Integer>{

    
}
