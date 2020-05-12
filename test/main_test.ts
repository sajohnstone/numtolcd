import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import  sayHello  from "../src/main.ts"

Deno.test({
  name: "testing example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});

Deno.test({
  name: "hello world example",
  fn(): void {
    assertEquals(sayHello('test'), "Welcome to Deno 🦕 test!");
  },
});