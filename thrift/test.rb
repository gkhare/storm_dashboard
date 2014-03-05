$:.push "./gen-rb"

require 'rubygems'
require 'thrift'
require 'nimbus'

begin
  socket    = Thrift::Socket.new('localhost', 6627)
  transport = Thrift::FramedTransport.new(socket)
  protocol  = Thrift::BinaryProtocol.new(transport)
  client    = Nimbus::Client.new(protocol)

  summary = client.getClusterInfo
end
