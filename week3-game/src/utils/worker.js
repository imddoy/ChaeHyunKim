let time = 0;

self.onmessage = function (e) {
  if (e.data === "start") {
    time = 0;
    self.interval = setInterval(() => {
      time += 10; // 10밀리초씩 증가
      self.postMessage(time);
    }, 10);
  } else if (e.data === "stop") {
    clearInterval(self.interval);
    self.close();
  }
};
