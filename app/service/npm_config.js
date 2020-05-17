const Service = require('egg').Service;
const YAML = require('yaml');
const pify = require('pify');
const fs = require('fs-extra');
const execa = require('execa');

class NpmService extends Service {
  async findConfig() {
    const data = await pify(fs.readFile)(this.app.config.configPath, 'utf8');
    const config = YAML.parse(data);
    return config;
  }

  async findPackages() {
    const data = await pify(fs.readJSON)(this.app.config.packagesPath, 'utf8');
    return data;
  }

  async findUsers() {
    const data = await pify(fs.readFile)(this.app.config.userPath, 'utf8');
    const reg = /(^.*)(?=:\$)/gm;
    return data.match(reg);
  }

  async updateConfig(config) {
    const data = YAML.stringify(config);
    await pify(fs.outputFile)(this.app.config.configPath, data.config);
    // const subprocess = execa('docker', ['restart', 'verdaccio']);
    // const { stdout } = await subprocess;
    // console.log('child output:', stdout);
  }
}

module.exports = NpmService;
