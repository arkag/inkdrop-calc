'use babel';

import InkdropCalcMessageDialog from './inkdrop-calc-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropCalcMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'InkdropCalcMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'InkdropCalcMessageDialog'
    )
    inkdrop.components.deleteClass(InkdropCalcMessageDialog);
  }

};
