function decodeUplink(b) {
  var chan = b.bytes[0]; 
  var typeid = b.bytes[1];
  var lat = (b.bytes[4] | b.bytes[3]<<8 | b.bytes[2]<<16 | (b.bytes[2] & 0x80 ? 0xFF<<24 : 0));
  var lon = (b.bytes[8] | b.bytes[7]<<8 | b.bytes[6]<<16 | b.bytes[5]<<24 | (b.bytes[5] & 0x80 ? 0xFF<<32 : 0));
  var alt = (b.bytes[10] | b.bytes[9]<<8 | (b.bytes[9] & 0x80 ? 0xFF<<16 : 0));

  return {
    data: {
      chan: chan,
      id: typeid,
      latitude: lat*.0000125,
      longitude: lon*.0000001,
      altitude: alt*.5
    },
    warnings: [],
    errors: []
  };
}
