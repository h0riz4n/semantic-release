package com.example.rustam_test.entity;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestEntity {

    private Long id;

    private String name;

    private LocalDateTime time;

    public TestEntity(Long id, String name) {
        this.name = name;
        this.id = id;
    }
}
