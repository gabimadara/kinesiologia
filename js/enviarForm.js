document.getElementById('form')
.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_0uevg19';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     alert('Sent!');
   }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
   });
});
emailjs.init('hNjT_DMfhiA81R6ZO')
