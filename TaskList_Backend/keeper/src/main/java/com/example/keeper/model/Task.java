package com.example.keeper.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String note;


    public int getId(){return id;}

    public String getTitle(){return title;}
    public void setTitle(String title){this.title = title;}

    public String getNote(){return note;}
    public void setNote(String note){this.note = note;}


    protected Task(){

    }

    public Task(String title,String note){
        this.title = title;
        this.note = note;
    }

}
