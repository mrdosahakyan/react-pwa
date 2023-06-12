export type TAuthConverter<FD, BD, FD1, BD1> = {
  toDb: (data: FD) => BD;
  fromDb: (data: BD1) => FD1;
};

export type TConverter<FD, BD> = {
  toDb: (data: FD) => BD;
  fromDb: (data: BD) => FD;
};

export type TFetchConverter<FD, BD> = {
  fromDb: (data: BD) => FD;
};

export type TCreateConverter<FD, BD> = {
  toDb: (data: FD) => BD;
};
