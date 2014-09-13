
describe("app.views.ProfileHeader", function() {
  beforeEach(function() {
    this.model = factory.personWithProfile({
      diaspora_id: "my@pod",
      name: "User Name",
      profile: { tags: ['test'] }
    });
    this.view = new app.views.ProfileHeader({model: this.model});
  });

  context("#presenter", function() {
    it("contains necessary elements", function() {
      expect(this.view.presenter()).toEqual(jasmine.objectContaining({
        diaspora_id: "my@pod",
        name: "User Name",
        is_blocked: false,
        is_own_profile: false,
        has_tags: true,
        profile: jasmine.objectContaining({
          tags: ['test']
        })
      }));
    });
  });
});
