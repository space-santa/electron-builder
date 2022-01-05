import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { BrowserBuilderOutput, executeBrowserBuilder } from '@angular-devkit/build-angular';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';

export function buildElectron(options: any, context: BuilderContext): Observable<BrowserBuilderOutput> {
  return executeBrowserBuilder(options, context, {
    webpackConfiguration: (config) => {
      return { ...config, target: 'electron-renderer' };
    }
  });
}

export default createBuilder<json.JsonObject>(buildElectron);