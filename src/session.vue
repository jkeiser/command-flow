<template>
  <div class="session">
    <div v-for="command in commands" :key="command.id" class="command">
        <div class="input"><span class="commandline">{{command.command}}</span></div>
        <div class="output"><span v-for="output in command.output" :key="output.id" :class="output.stream">{{output.text}}</span></div>
    </div>
    <div class="command">
      <div class="input"><input type="text" id="commandline" width="100%" class="commandline" /></div>
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
          command: "cd blah",
          output: [
          ]
        },
        {
          command: "ls",
          output: [
            { stream: STDOUT, timestamp: Date.now(), text: "/hello.txt\n" },
            { stream: STDOUT, timestamp: Date.now(), text: "/hello.csv\n" },
          ]
        }
      ]
    }
  }
}
</script>
