<template>
  <div class="session">
    <div v-for="command in commands" :key="command.id" class="command">
        <div class="input"><span class="commandline">{{command.command}}</span></div>
        <div class="output"><span v-for="output in command.output" :key="output.id" :class="output.stream">{{output.text}}</span></div>
    </div>
    <div class="command">
      <div class="input"><input type="text" id="commandline" width="100%" class="commandline" placeholder="Type a command here." /></div>
      <div class="output"></div>
    </div>
  </div>
</template>

<script>
const STDOUT = Symbol("stdout");
const STDERR = Symbol("stderr");
const STDIN  = Symbol("stdin");
export default {
  name: 'session',
  data () {
    return {
      commands: [
        {
          command: "cd blagh",
          exitCode: 1,
          output: [
            { stream: STDERR, timestamp: Date.now(), text: "No such directory." }
          ]
        },
        {
          command: "cd blah",
          exitCode: 0,
          output: []
        },
        {
          command: "ls",
          exitCode: 0,
          output: [
            { timestamp: Date.now(), text: "/hello.txt\n" },
            { timestamp: Date.now(), text: "/hello.csv\n" },
          ]
        },
        {
          command: "yes",
          output: [
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
            { timestamp: Date.now(), text: "Y\n" },
          ],
          stderr: []
        },
      ]
    }
  }
}
</script>
