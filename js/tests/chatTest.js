describe('chat service tests', function(){
		
/*	beforeEach(function(){
	  module(function($provide){
      $provide.service('chatService', function(){
        this.chatHistory = jasmine.createSpy('chatHistory');
      });
    });
    module('app');
  });*/


/*beforeEach(inject(function(){
  var pubnub = pubnub;
}));*/

it('it should log all chat history', function(){
	var reciever = {"id":"ID 1"};
	var m = ['message 1', 'message 2'];
	chatService.chatHistory(reciever.id);

	expect(chatService.chatHistory).toHaveBeenCalled();
	expect(chatService.chatHistory).toHaveBeenCalledWith(reciever.id);

})



})