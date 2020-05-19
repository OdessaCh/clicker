class User < ActiveRecord::Base
  validates :name, presence: {
                     message: "Le pseudo doit être renseigné",
                   }
  validates :name, uniqueness: {
                     message: "Le pseudo est déjà prit",
                   }
end
