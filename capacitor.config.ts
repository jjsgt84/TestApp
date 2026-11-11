import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.testapp.app',
  appName: 'TestApp',
  webDir: 'dist',
  // Local IP live-reload configuration for physical device / emulator testing:
  // server: {
  //   url: 'http://192.168.0.10:5173',
  //   cleartext: true
  // }
};

export default config;
