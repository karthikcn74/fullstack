module.exports = {
  name: 'ux-mobile',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ux-mobile',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
