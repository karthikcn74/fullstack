module.exports = {
  name: 'ux-hm',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ux-hm',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
