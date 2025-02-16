package com.example.rustam_test.entity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class TestEntityTest {

    @Test
    void test1() {
        TestEntity testEntity = new TestEntity(1L, "name");
        assertNotNull(testEntity);

    }

    @Test
    void test2() {
        Integer first = 1;
        Integer second = 2;

        assertNotEquals(first, second);
    }
}
