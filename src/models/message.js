class Message {
  constructor(messageId, channelId, userId, message, date) {
    this.messageId = messageId;
    this.channelId = channelId;
    this.userId = userId;
    this.message = message;
    this.date = date;
  }

  getMessageId() {
    return this.messageId;
  }

  setMessageId(messageId) {
    this.messageId = messageId;
  }

  getChannelId() {
    return this.channelId;
  }

  setChannelId(channelId) {
    this.channelId = channelId;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    this.userId = userId;
  }

  getMessage() {
    return this.message;
  }

  setMessage(message) {
    this.message = message;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }
}

module.exports = Message;
