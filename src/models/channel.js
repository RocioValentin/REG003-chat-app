class Channel {
  constructor(channelId, channelType) {
    this.channelId = channelId;
    this.channelType = channelType;
  }

  getChannelId() {
    return this.channelId;
  }

  setChannelId(channelId) {
    this.channelId = channelId;
  }

  getChannelType() {
    return this.channelType;
  }

  setChannelType(channelType) {
    this.channelType = channelType;
  }
}

module.exports = Channel;
