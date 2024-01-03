import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'thriftease-client',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
