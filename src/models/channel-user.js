class ChannelUser {
  constructor(channelUserId, channelId, userId, date) {
    this.channelUserlId = channelUserId;
    this.channelId = channelId;
    this.userId = userId;
    this.date = date;
  }

  getchannelUserId() {
    return this.channelUserId;
  }

  setchannelUserId(channelUserId) {
    this.channelUserId = channelUserId;
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

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }
}

module.exports = ChannelUser;
