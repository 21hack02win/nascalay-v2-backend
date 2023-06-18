// @generated by protoc-gen-connect-es v0.10.0 with parameter "target=ts"
// @generated from file api/proto/v2/stream.proto (package api.proto.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { StreamRequest, StreamResponse } from "./stream_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.proto.v2.StreamService
 */
export const StreamService = {
  typeName: "api.proto.v2.StreamService",
  methods: {
    /**
     * @generated from rpc api.proto.v2.StreamService.Stream
     */
    stream: {
      name: "Stream",
      I: StreamRequest,
      O: StreamResponse,
      kind: MethodKind.BiDiStreaming,
    },
  }
} as const;
