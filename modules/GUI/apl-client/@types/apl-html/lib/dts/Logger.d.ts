/*!
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */
declare namespace APL {
    export type CoreLogTransport = (level: number, log: string) => void;
    export class Logger extends Deletable {
        public static setLogTransport(transport: CoreLogTransport): void;
    }
}
