export type DeviceType = {
  id: number;
  code: string | null;
  os: string | null;
  vendor: string | null;
  model: string | null;
  osVersion: string | null;
  image: string | null;
  borrowed?: {
    user: {
      id: number | null;
      type: string | null;
      login: string | null;
      name: string | null;
    };
  };
};
