/**
 * A mokk úgy működik, hogy amilyen node_module-t mokkolni akarunk,
 * azt betesszük a __mocks__ könyvtárba, így innen olvassa fel a @jest
 */

module.exports = {
  setApiKey() {},
  send() {}
};
