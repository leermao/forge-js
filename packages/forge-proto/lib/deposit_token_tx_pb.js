/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var type_pb = require('./type_pb.js');
goog.object.extend(proto, type_pb);
goog.exportSymbol('proto.forge_abi.DepositTokenTx', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.forge_abi.DepositTokenTx = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.forge_abi.DepositTokenTx, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.forge_abi.DepositTokenTx.displayName = 'proto.forge_abi.DepositTokenTx';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.forge_abi.DepositTokenTx.prototype.toObject = function(opt_includeInstance) {
  return proto.forge_abi.DepositTokenTx.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.forge_abi.DepositTokenTx} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.DepositTokenTx.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: (f = msg.getValue()) && type_pb.BigUint.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    evidence: (f = msg.getEvidence()) && type_pb.Evidence.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.forge_abi.DepositTokenTx}
 */
proto.forge_abi.DepositTokenTx.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.forge_abi.DepositTokenTx;
  return proto.forge_abi.DepositTokenTx.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.forge_abi.DepositTokenTx} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.forge_abi.DepositTokenTx}
 */
proto.forge_abi.DepositTokenTx.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new type_pb.BigUint;
      reader.readMessage(value,type_pb.BigUint.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new type_pb.Evidence;
      reader.readMessage(value,type_pb.Evidence.deserializeBinaryFromReader);
      msg.setEvidence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.forge_abi.DepositTokenTx.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.forge_abi.DepositTokenTx.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.forge_abi.DepositTokenTx} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.forge_abi.DepositTokenTx.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      type_pb.BigUint.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      type_pb.Evidence.serializeBinaryToWriter
    );
  }
};


/**
 * optional BigUint value = 1;
 * @return {?proto.forge_abi.BigUint}
 */
proto.forge_abi.DepositTokenTx.prototype.getValue = function() {
  return /** @type{?proto.forge_abi.BigUint} */ (
    jspb.Message.getWrapperField(this, type_pb.BigUint, 1));
};


/** @param {?proto.forge_abi.BigUint|undefined} value */
proto.forge_abi.DepositTokenTx.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.forge_abi.DepositTokenTx.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.DepositTokenTx.prototype.hasValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.forge_abi.DepositTokenTx.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.forge_abi.DepositTokenTx.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Evidence evidence = 3;
 * @return {?proto.forge_abi.Evidence}
 */
proto.forge_abi.DepositTokenTx.prototype.getEvidence = function() {
  return /** @type{?proto.forge_abi.Evidence} */ (
    jspb.Message.getWrapperField(this, type_pb.Evidence, 3));
};


/** @param {?proto.forge_abi.Evidence|undefined} value */
proto.forge_abi.DepositTokenTx.prototype.setEvidence = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.forge_abi.DepositTokenTx.prototype.clearEvidence = function() {
  this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.forge_abi.DepositTokenTx.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;