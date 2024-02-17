import figlet from "figlet";

const mainServer = Bun.serve({
  port: 8000,
  fetch(request) {
    const heading = figlet.textSync("Hello Afreed. Wanna eat fresh baked Bun?");
    const emoji = "🎂";
    const resBody = heading + emoji;
    return new Response(resBody);
  },
});

console.log(`Server started at port: ${mainServer.port}`);
